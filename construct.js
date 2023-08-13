function me(name) {
    console.log(name);
}


class Vehicle {
    constructor(vName, mName, cName) {
        this.vName = vName;
        this.mName = mName;
        this.cName = cName;
        console.log("This is a vehicle class");
    }

    name() {
        console.log("The name of this vehicle is:" + this.vName);
    }
    manufacturer() {
        console.log("Vehicle name manufacturer is: " + this.mName);
    }
    country() {
        console.log("Country name: " + this.cName);
    }
    dateBuilt() { }
}

const veh = new Vehicle('E Class', 'Mercedes', 'Germany');
veh.name();
veh.manufacturer();
veh.country();