const bcript = require('bcrypt')

async function crypto(pwd){
    
    const salt = await bcript.genSalt()
    
    const password = await bcript.hash(pwd, salt)  
    
    return password
}

module.exports = {
    crypto
}