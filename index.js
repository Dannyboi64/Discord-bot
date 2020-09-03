const Discord = require("discord.js");
const bot = new Discord.Client();
const token = '';
const prefix = '!';
const fs  = require('fs'); 
const general = '480879984462921740';
bot.login(token);
bot.channels.cache.get('480879984462921740')
//const reponse = ["yes","no","maybe","exactly!","W","only on tusdays"];
var data;
bot.on('ready',() =>{
    console.log("This bot is online");
    fs.readFile('!cullum-count.txt', (error,data) => {
 
        if (error) throw err;
     
        console.log("cullum count is.."+data);
    })
  
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channelID
    let oldUserChannel = oldMember.channelID
    
    
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
        //joined server
       console.log("joined...."+newMember.channel.name);
       
       
  
    } else if(newUserChannel === null){
        //left server
        console.log("left");
      
  
    }else{
        //switched channel in server
        console.log("switched to...."+newMember.channel.name);
        
    }
    if(newMember == '181440510349672458' && newMember.channelID =='612423147119181874'){ //181440510349672458 <-- Cullum's ID  : AFK ID -->612423147119181874
        fs.readFile('!cullum-count.txt', (error,data) => {
            let Embed = new Discord.MessageEmbed()
            .setColor('#9acb34')
            .setTitle('Where Dougal go?')
            .setAuthor('Fuck Sake')
            .setDescription('.....probably the pub')
            .setThumbnail('https://raw.githubusercontent.com/Dannyboi64/Discord-bot/master/chair.png')
            .setImage('https://static.wixstatic.com/media/19eb54_4ae71a3907294a20013125ba4fd18b83.png/v1/fill/w_350,h_574,al_c,q_85,usm_0.66_1.00_0.01/19eb54_4ae71a3907294a20013125ba4fd18b83.webp')
            .addFields(
                 { name: 'Cullum counter', value: data},
                 {name: 'Doing a Cullum',value: '*adjective*'},
                 {name: 'Meaning',value: '1. To commit to a task, only to be distracted by a third-party such as talking to family, to get a drink and find yourself in the pub, or to be distracted by the arrival of takeaway food.'},
            ) 
        	.setTimestamp()

            bot.channels.cache.get('480879984462921740').send(Embed);
            if (error) throw err;

            fs.writeFile('!cullum-count.txt', (parseInt(data)+1).toString(10), (error) => { 
  
                // In case of a error throw err exception. 
                if (error) throw err;
            })
            console.log("AFK");
        })
    
    }
})
bot.on('message', msg=>{
    
    let args = msg.content.substring(prefix.length).split(" ");
    // if(msg.author.id === '201399420338569216'){
    //     var count = Math.round(Math.random()*10)     //Ewa Code
    //     if (count<6){
    //         msg.channel.send("allegedly");
    //     } 
    // }
            
    switch(args[0]){
        
        case 'ping':
            msg.channel.send('pong');
            break;
        case 'clear' :
            if(!args[1]) return msg.reply("Please define how many")
            msg.channel.bulkDelete(args[1]);
            break; 
        case 'help':
            msg.reply("type ping for pong, clear for clear. Thats it")
            break;
        case 'user':
            msg.reply(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
            break;
        case 'fuck':
            if (args[1]="you"){
                let member = msg.author.id
                member.setVoiceChannel(null); //doenst work              
            }
        case 'die':
            msg.reply("...ok :(");
            
            process.exit();
            break;
        case 'cullum':
            fs.readFile('!cullum-count.txt', (error,data) => {
                let Embed = new Discord.MessageEmbed()
            	.setColor('#9acb34')
            	.setTitle('Where Dougal go?')
            	.setAuthor('Fuck Sake')
            	.setDescription('.....probably the pub')
            	   
                .addFields(
                    { name: 'Cullum counter', value: data},
                    {name: 'Doing a Cullum',value: '*adjective*'},
                    {name: 'Meaning',value: '1. To commit to a task, only to be distracted by a third-party such as talking to family, to get a drink and find yourself in the pub, or to be distracted by the arrival of takeaway food.'},
                ) 
            	.setImage('https://static.wixstatic.com/media/19eb54_4ae71a3907294a20013125ba4fd18b83.png/v1/fill/w_350,h_574,al_c,q_85,usm_0.66_1.00_0.01/19eb54_4ae71a3907294a20013125ba4fd18b83.webp')
                .setThumbnail('https://raw.githubusercontent.com/Dannyboi64/Discord-bot/master/chair.png')

                .setTimestamp()
                //.setThumbnail('unknown.png')

                msg.channel.send(Embed);
                
                if (error) throw err;
             
                console.log("cullum count is.."+data);
                console.log(parseInt(data)*2);
                fs.writeFile('!cullum-count.txt', (parseInt(data)+1).toString(10), (error) => { 
          
                // In case of a error throw err exception. 
                    if (error) throw err; 
                })
            
            })
            break;
        case 'Cullum':
            console.log("Cullum");
            break;
        case 'cullumCount':
            fs.readFile('!cullum-count.txt', (error,data) => {
                let Embed = new Discord.MessageEmbed()
                .setColor('#9acb34')         
                .addFields(
                    { name: 'Cullum counter', value: data+" times"},
                ) 
                
                .setThumbnail('https://raw.githubusercontent.com/Dannyboi64/Discord-bot/master/chair.png')
        	    .setTimestamp()
                if (error) throw err;
             
                msg.channel.send(Embed);
            })
            break;
        case 'bump':
            if(!args[1]) return msg.reply("Please define how many")
            fs.readFile('!cullum-count.txt', (error,data) => {
                fs.writeFile('!cullum-count.txt', (parseInt(data)+parseInt(args[1])).toString(10), (error) => { 
          
                    // In case of a error throw err exception. 
                    if (error) throw err; 
                })
                msg.channel.send("Cullum Count is..."+(parseInt(data)+parseInt(args[1])));
            })
            break;
    }   
})








