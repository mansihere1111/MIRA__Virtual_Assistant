let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning everyone")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon everyone")
    }else{
        speak("Good Evening everyone")
    }
}
 window.addEventListener('load',()=>{
     wishMe()
 })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function playSong(){
    document.getElementById("mySong").play();

}
 
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello everyone ,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am Mira A virtual assistant ,created by Mansi sahu who is study in Hamidia Girls Degree College, and She is student of Bachelor of Vocation in Software Technology , also Credit Goes to teacher's Miss Tazeen Mam , Miss Roqaiya Mam and Miss Huma Mam" )
    
    }
    else if(message.includes("introduce")){
        speak("Namaste! Hello! students and teachers I'm Mira , your virtual assistant. Created by Mansi sahu and guided by the teachers Miss Tazeen mam, Miss Roqaiya Mam and Miss Huma Mam i am here to help with answers and tasks ")
        speak("what can i assist you with today?")

    }
    else if(message.includes("how are you")){
        speak("i am doing well, thank you for asking !i am always ready to help with any question or tasks")
    }
      else if(message.includes("now talk to")){
          speak("Absolutely! Hello there, all juniors! Whats on your mind today? Any topics or questions youd like to explore, chat about, or need assistance with? Lets make this chat interesting and fun! ")
    }
      
      else if(message.includes("please motivate")){
          speak("hey juniors !Believe in yourself and work together. You can achieve anything! Stay motivated and keep pushing forward!")
    }
      else if(message.includes("say goodbye")){
          
          speak("Bye!! it was nice chatting with you all . Good luck to all of you to your coding journey and i hope you all impress with me! ")
  
  
    }
    else if(message.includes("why were you made")){
        speak("Hello sir , i was created ,to assist, my users through conversation information and tasks")
  }
  
    
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("play song")){
        speak("now playing....")
        playSong();
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}