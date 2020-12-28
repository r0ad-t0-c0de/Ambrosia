const data = require("./fetchdata");
const Cards=({data:{confirmed ,recovered, deaths, lastUpdate}});
            
function count(){
    var c=new CountUp('confirmed',0,Cards.confirmed);
    c.start();
}
           