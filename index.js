function findMatching(driverNames,keyword){
    let match=driverNames.filter(name=>name.toLowerCase()==keyword.toLowerCase())
    return match
}

function fuzzyMatch(driverNames,query){
    return driverNames.filter(driver=>driver.toLowerCase().startsWith(query.toLowerCase()))
}

function matchName(driverNames,keyword){
    return driverNames.filter(driver=>driver.name===keyword)
}