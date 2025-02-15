"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
const Poker_1 = require("./Poker");
class Game {
    constructor() {
        //测试模式 三个 AI 自动打牌
        this.testModel = false;
        // 玩家列表
        this.playerList = [];
        // 扑克列表
        this.pokerList = [];
        //每局底分
        this.BaseScore = 1;
        //当前局分
        this.score = this.BaseScore;
        //阶段 ready\jiaoFen\play
        this.stage = 'ready';
        // 地主
        this.dizhu = null;
        // 当前出牌人
        this.currentPlayer = null;
        // 当前叫分人
        this.currentJiaoFenPlayer = null;
        // 叫分总数
        this.jiaoFenCount = 0;
        // 出牌倒计时(最大值)
        this.MaxSecond = 20;
        // 出牌倒计时 - 实时倒计时
        this.second = this.MaxSecond;
        this.dizhuPokerList = [];
        this.deskPokerObj = null;
        this.oldPokerList = [];
        this.init();
    }
    init() {
        this.initPokerList();
        this.initPlayerList();
    }
    initPlayerList() {
        let that = this;
        this.playerList = [];
        let player0 = new Player_1.default({
            name: 'player',
            isRobot: that.testModel,
            game: this,
        });
        let player1 = new Player_1.default({
            name: '机器人1',
            isRobot: true,
            game: this,
        });
        let player2 = new Player_1.default({
            name: '机器人2',
            isRobot: true,
            game: this,
        });
        this.playerList = [player0, player1, player2];
        this.playerList[0].next = this.playerList[1];
        this.playerList[1].next = this.playerList[2];
        this.playerList[2].next = this.playerList[0];
        this.playerList[0].last = this.playerList[2];
        this.playerList[1].last = this.playerList[0];
        this.playerList[2].last = this.playerList[1];
    }
    initPokerList() {
        this.pokerList = [];
        for (let number = 3; number <= 15; number++) {
            for (let type = 0; type < 4; type++) {
                let poker = new Poker_1.default({
                    number: number,
                    type: type,
                });
                this.pokerList.push(poker);
            }
        }
        for (let number = 16; number <= 17; number++) {
            let poker = new Poker_1.default({
                number: number,
            });
            this.pokerList.push(poker);
        }
    }
    setReady() {
        if (this.playerList[0] &&
            this.playerList[0].ready &&
            this.playerList[1] &&
            this.playerList[1].ready &&
            this.playerList[2] &&
            this.playerList[2].ready) {
            this.sendPoker();
            this.startJiaoFen();
        }
    }
    //开始叫分
    startJiaoFen() {
        this.stage = 'jiaoFen';
        let index = this.getRandomIntInclusive(0, 2);
        this.currentJiaoFenPlayer = this.playerList[index];
    }
    someOneJiaoFen() {
        let that = this;
        this.jiaoFenCount++;
        let timeWait = 1000;
        if (that.testModel) {
            timeWait = 5000;
            // timeWait = 0;
        }
        if (this.jiaoFenCount === 3) {
            setTimeout(function () {
                that.setDiZhu();
            }, timeWait);
            return;
        }
        else {
            this.currentJiaoFenPlayer = this.currentJiaoFenPlayer.next;
        }
    }
    /**
     * 设置地主
     */
    setDiZhu() {
        let sortList = this.playerList.slice(0).sort(this.sortByJiaoFen);
        let dizhu;
        // 如果三个人任意组合都是叫分都是一样的, 随机生成一个地主
        if (sortList[0].jiaoFen === sortList[1].jiaoFen) {
            if (sortList[0].jiaoFen === sortList[2].jiaoFen) {
                let index = this.getRandomIntInclusive(0, 2);
                dizhu = sortList[index];
            }
            else {
                let index = this.getRandomIntInclusive(0, 1);
                dizhu = sortList[index];
            }
        }
        else {
            dizhu = sortList[0];
        }
        dizhu.type = 'dizhu';
        this.dizhu = dizhu;
        this.sendDiZhuPoker();
        this.start();
    }
    sortByJiaoFen(a, b) {
        return b.jiaoFen - a.jiaoFen;
    }
    /**
     * 重置倒计时
     */
    resetTime() {
        this.second = this.MaxSecond;
    }
    /**
     * 出牌超时后触发的函数
     */
    timeLoop() {
        if (this.stage !== 'play') {
            return;
        }
        this.second--;
        if (this.second === 0) {
            this.timeout();
        }
        let that = this;
        setTimeout(function () {
            that.timeLoop();
        }, 1000);
    }
    /**
     * 出牌超时后触发的函数
     */
    timeout() {
        this.currentPlayer.playByString('pass');
    }
    start() {
        this.stage = 'play';
        this.timeLoop();
        this.currentPlayer = this.dizhu;
        if (this.currentPlayer.isRobot) {
            this.currentPlayer.playByAI();
        }
    }
    reset() {
        this.playerList[0].reset();
        this.playerList[1].reset();
        this.playerList[2].reset();
        this.pokerList = [];
        this.dizhuPokerList = [];
        this.deskPokerObj = null;
        this.oldPokerList = [];
        this.currentPlayer = null;
        this.currentJiaoFenPlayer = null;
        this.jiaoFenCount = 0;
        this.dizhu = null;
        this.second = this.MaxSecond;
        this.score = this.BaseScore;
        this.stage = 'ready';
        this.initPokerList();
    }
    //有玩家出牌
    someOneSendPoker(obj) {
        this.clearDesk();
        this.deskPokerObj = obj;
        this.checkBoom(obj);
        let over = this.checkGameOver();
        if (over) {
            this.gameOver();
            return;
        }
        this.next();
    }
    //炸弹分数翻1番 火箭翻2番
    checkBoom(obj) {
        if (obj.type === 'four') {
            this.score *= 2;
        }
        else if (obj.type === 'four') {
            this.score *= 4;
        }
    }
    next() {
        this.resetTime();
        this.currentPlayer = this.currentPlayer.next;
        if (this.currentPlayer.isRobot) {
            this.currentPlayer.playByAI();
        }
    }
    gameOver() {
        if (!this.testModel) {
            alert('游戏结束! ' + this.currentPlayer.name + ' [' + this.currentPlayer.type + '] 胜!');
        }
        else {
            console.log(this.playerList[0].money + ' ' + this.playerList[1].money + ' ' + this.playerList[2].money + ' ');
        }
        this.settleMoney();
        this.reset();
    }
    //结算金币得失
    settleMoney() {
        if (this.currentPlayer.type === 'nongmin') {
            this.currentPlayer.money += this.score;
            if (this.currentPlayer.next.type === 'nongmin') {
                this.currentPlayer.next.money += this.score;
            }
            else {
                this.currentPlayer.next.money -= this.score * 2;
            }
            if (this.currentPlayer.last.type === 'nongmin') {
                this.currentPlayer.last.money += this.score;
            }
            else {
                this.currentPlayer.last.money -= this.score * 2;
            }
        }
        else {
            this.currentPlayer.money += this.score * 2;
            this.currentPlayer.next.money -= this.score;
            this.currentPlayer.last.money -= this.score;
        }
    }
    checkGameOver() {
        if (this.currentPlayer.pokerList.length === 0) {
            return true;
        }
    }
    clearDesk() {
        if (this.deskPokerObj) {
            this.oldPokerList.push(this.deskPokerObj);
            this.deskPokerObj = null;
        }
    }
    sendDiZhuPoker() {
        do {
            let poker = this.pokerList.splice(0, 1)[0];
            this.dizhu.addPoker(poker);
        } while (this.pokerList.length > 0);
        this.dizhu.sortPoker();
    }
    sendPoker() {
        let player = this.playerList[0];
        do {
            let index = this.getRandomIntInclusive(0, this.pokerList.length - 1);
            let poker = this.pokerList.splice(index, 1)[0];
            player.addPoker(poker);
            player = player.next;
        } while (this.pokerList.length > 3);
        for (let i = 0; i < this.playerList.length; i++) {
            this.playerList[i].sortPoker();
        }
        this.dizhuPokerList = this.pokerList.slice(0);
    }
    /**
     * 获取指定区间的随机数
     * @param min 最小值
     * @param max 最大值
     * @returns
     */
    getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
exports.default = Game;
