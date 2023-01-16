const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries=0;
// Code your solution here
function reducer() {
    
    for (let i = 0; i < batteryBatches.length; i++){
        totalBatteries = totalBatteries + batteryBatches[i];
    }
    
    
    console.log(totalBatteries);
    return totalBatteries;
    
}

reducer();