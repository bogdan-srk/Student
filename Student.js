function Student(name) {

    const STATS = {
        DRUNK: "drunk",
        SATIETY: "satiety",
        ENERGY: "energy",
        FUN: "fun"
    };

    this.name = name;

    var it = this;
    var condition = new Condition();

    this.getCondition = function () {
        return condition;
    };

    this.sleep = function () {
        try {
            condition.setProperties({
                drunk: condition.MIN_PERCENT,
                energy: condition.MAX_PERCENT
            });
            condition.updateProperties({
                satiety: -30
            });
            console.log(this.name + " sleeps.");
        } catch (e) {
            performAction(e);
            this.sleep();
        }

    };

    this.eat = function () {
        try {
            condition.setProperties({
                satiety: condition.MAX_PERCENT
            });
            console.log(this.name + " eats.");
        } catch (e) {
            performAction(e);
            this.eat();
        }
    };

    this.goParty = function () {
        try {
            condition.setProperties({
                fun: condition.MAX_PERCENT
            });
            condition.updateProperties({
                energy: -60,
                drunk: 60
            });
            console.log(this.name + " on a party.");
        } catch (e) {
            performAction(e);
            this.goParty();
        }
    };

    this.passExam = function () {
        try {
            condition.updateProperties({
                energy: -60,
                fun: -70
            });
            console.log(this.name + " passes exam.");
        } catch (e) {
            performAction(e);
            this.passExam();
        }
    };

    this.makeLab = function () {
        try {
            condition.updateProperties({
                energy: -55,
                fun: -60
            });
            console.log(this.name + " make lab.");
        } catch (e) {
            performAction(e);
            this.makeLab();
        }
    };

    var performAction = function (e) {
        if (e.description == 'less') {
            switch (e.propName) {
                case (STATS.ENERGY):
                    console.log("-- needs rest");
                    it.sleep();
                    break;
                case (STATS.SATIETY):
                    console.log("-- is hungry");
                    it.eat();
                    break;
                case (STATS.FUN):
                    console.log("-- is bored");
                    it.goParty();
                    break;
                case (STATS.DRUNK):
                    break;
            }
        } else if (e.description == 'much') {
            switch (e.propName) {
                case (STATS.ENERGY):
                    break;
                case (STATS.SATIETY):
                    break;
                case (STATS.FUN):
                    break;
                case (STATS.DRUNK):
                    console.log("-- is drunk a little bit");
                    it.sleep();
                    break;

            }
        }
    };


}