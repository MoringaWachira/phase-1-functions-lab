// Code your solution in this file!

const scuberHq = 42;

const blockDistance = 264;

function distanceFromHqInBlocks(pickUpLocation) {
    let blockDifference;
    if (pickUpLocation > scuberHq) {
        blockDifference = pickUpLocation - scuberHq;
    } else {
        blockDifference = scuberHq - pickUpLocation;
    }
    return blockDifference;
}
function distanceFromHqInFeet(pickUpLocation) {
    let feetDistance = distanceFromHqInBlocks(pickUpLocation)
    return feetDistance * blockDistance;
    
}

function distanceTravelledInFeet(pickUpLocation,scuberHq) {
    let distanceTravelled;
    if (pickUpLocation > scuberHq) {
        distanceTravelled = (pickUpLocation - scuberHq) * blockDistance;
    } else {
        distanceTravelled = (scuberHq - pickUpLocation) * blockDistance;
    }
    return distanceTravelled;
}

function calculatesFarePrice(pickUpLocation,scuberHq) {
    let distanceFare = distanceTravelledInFeet(pickUpLocation,scuberHq);
    let fare;
    if (distanceFare > 0 && distanceFare <= 400) {
        fare = 0;
    } else if (distanceFare > 400 && distanceFare <= 2000) {
        fare = (distanceFare - 400) * 0.02;
    } else if (distanceFare > 2000 && distanceFare <= 2500) {
        fare = 25;
    } else {
        return 'cannot travel that far'
    }
    return fare;
    
}






