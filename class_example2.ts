abstract class Animal {
    name: string;
    habitatType: HabitatType;


    constructor(name: string, habitatType: HabitatType) {
        this.name = name;
        this.habitatType = habitatType;
    }

    move():void {
        console.log('im moving');
    }
}

enum HabitatType {
    LAND,
    WATER,
    AIR
}

class Tiger extends Animal {
    fangs: number;
    constructor(name: string, habitatType: HabitatType, fangs:number) {
        super(name, habitatType);
        this.fangs = fangs;
    }

    move():void {
        console.log('im prawling');
    }
}

class Tapir extends Animal {

    constructor(name: string, habitatType: HabitatType) {
        super(name, habitatType);
    }

}

class Hawk extends Animal {

    beakOrNoBeak: boolean;

    constructor(name: string, habitatType: HabitatType, beakOrNoBeak:boolean) {
        super(name, habitatType);
        this.beakOrNoBeak = beakOrNoBeak;
    }
}

let tony: Tiger = new Tiger('TonyTheTiger', HabitatType.LAND, 2);
let tonyHawk: Hawk = new Hawk('TonyTheHaw', HabitatType.AIR, true);

console.log(JSON.stringify(tony));
console.log(JSON.stringify(tonyHawk));
