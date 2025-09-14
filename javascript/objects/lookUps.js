function phoneticLookUp(val){
    var result = ""


    var lookup = {
        "alpha":"Adams",
        "bravo": "Boston",
        "charlie": "Denvar",
        "delta": "Denvar",
        "Echo": "Easy",
        "foxtrot": "frank"

    }
    result = lookup[val]
    return result
}

console.log(phoneticLookUp("alpha"))
console.log(phoneticLookUp("foxtrot"))