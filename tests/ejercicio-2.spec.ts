import 'mocha';
import {expect} from 'chai';
import {isConvertible} from "../src/Ejercicio_2/isConvertible";
import {Distance} from "../src/Ejercicio_2/Distance";
import {Mass} from "../src/Ejercicio_2/Mass";
import {Speed} from "../src/Ejercicio_2/Speed";
import {Time} from "../src/Ejercicio_2/Time";
import {Temperature} from "../src/Ejercicio_2/Temperature";
import {Force} from "../src/Ejercicio_2/Force";
import {Volume} from "../src/Ejercicio_2/Volume";

let Dist1: Distance = new Distance(230, "KM");
let Dist2: Distance = new Distance(100, "YARD");

let mass1: Mass = new Mass(100, "KG");
let mass2: Mass = new Mass(60, "POUNDS");
let mass3: Mass = new Mass(40, "OZ");

let speed1: Speed = new Speed(100, "KMh");
let speed2: Speed = new Speed(60, "MS");

let time1: Time = new Time(100, "s");
let time2: Time = new Time(43, "h");

let temp1: Temperature = new Temperature(100, "Celsius");
let temp2: Temperature = new Temperature(43, "Kelvin");

let force1: Force = new Force(300, "Kilopondio");
let force2: Force = new Force(23, "Newton");

let vol1: Volume = new Volume(20, "Litro");
let vol2: Volume = new Volume(100, "Galon");

describe('Distance', () => {
  it("230 KM son 251531 Yardas", () => {
    expect(Dist1.convertItems("YARD")).to.eql(251530.3);
  });
  it("230 KM son 123.97 Millas", () => {
    expect(Dist1.convertItems("MILE")).to.eql(123.97);
  });
  it("100 Yardas son 0.05 Millas", () => {
    expect(Dist2.convertItems("MILE")).to.eql(0.05);
  });
})

describe('Mass', () => {
  it("100 Kg son 220.46 Libras", () => {
    expect(mass1.convertItems("POUNDS")).to.eql(220.46);
  });
  it("60 LB son 27.21 Libras", () => {
    expect(mass2.convertItems("KG")).to.eql(27.22);
  });
  it("40 OZ son 1.13 Kg", () => {
    expect(mass3.convertItems("KG")).to.eql(1.13);
  });
})

describe('Speed', () => {
  it("100 KmH son 27 Ms", () => {
    expect(speed1.convertItems("MS")).to.eql(27);
  });
  it("60 MS son 216 KMh", () => {
    expect(speed2.convertItems("KMh")).to.eql(216);
  });
})

describe('Time', () => {
  it("100 s son 1.66 m", () => {
    expect(time1.convertItems("m")).to.eql(1.67);
  });
  it("43 h son 154800 m", () => {
    expect(time2.convertItems("s")).to.eql(154800);
  });
})

describe('Temperature', () => {
  it("100 Celsius son 212 Fahrenheit", () => {
    expect(temp1.convertItems("Fahrenheit")).to.eql(212);
  });
  it("43 Kelvin son -230.15 Celsius", () => {
    expect(temp2.convertItems("Celsius")).to.eql(-230.15);
  });
})

describe('Force', () => {
  it("300 Kilopondios son 2941.99 Newton", () => {
    expect(force1.convertItems("Newton")).to.eql(2942.1);
  });
  it("23 Newton son 2.35 Kilopondio", () => {
    expect(force2.convertItems("Kilopondio")).to.eql(2.35);
  });
})

describe('Volume', () => {
  it("20 Litros son 5.28 Galones", () => {
    expect(vol1.convertItems("Galon")).to.eql(5.28);
  });
  it("100 Galones son 75.70 Litros", () => {
    expect(vol2.convertItems("Litro")).to.eql(378.5);
  });
})