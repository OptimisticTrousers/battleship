let wasHit = false
let status = false
let lastHitPos = []
let firstHitPos = []
let secondHitPos = []
let surroundingPos = []
let attackDirection;

function setWasHit(value, stat, pos1, pos2){
    wasHit = value

    if(stat !== undefined) status = stat;
    if(pos1 !== undefined) lastHitPos = [pos1, pos2];
    if(firstHitPos.length === 0 && pos1 !== undefined) firstHitPos = [pos1, pos2]
    else if(firstHitPos.length !== 0 && secondHitPos.length === 0 && pos1 !== undefined)
        secondHitPos = [pos1, pos2]
}

function getWasHit(){
    return [wasHit, lastHitPos, status]
}

function registerSurroundingPost(pos1, pos2){
    surroundingPos = []

    if(pos2 !== 0) surroundingPos.push([pos1, pos2 -1])
    if(pos2 !== 9) surroundingPos.push([pos1, pos2 + 1])
    if(pos1 !== 9) surroundingPos.push([pos1 -1, pos2])
    if(pos1 !== 9) surroundingPos.push([pos1 + 1, pos2])
}