
const app =require('./app');
const {connect} = require('./database');

async function main(){

    //databse connection
         await connect();
      await app.listen(4000)
      console.log("ejecutando puerto 4000")
}
main();