function outer(){
    console.log('crazy');

    function inner(){
        console.log('inner')
    }

    inner()
}

outer()