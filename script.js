const People = [
    {
        name:"Susan Smith",
        position:"Web Developer",
        picture:"./pictures/Susan.jpg",
        description:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        name:"Peter Jones",
        position:"Intern",
        picture:"./pictures/Peter.jpg",
        description:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8- bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst swag. jianbing post-ironicraclette"
    },
    {
        name:"Bill Anderson",
        position:"The Boss",
        picture:"./pictures/Bill.jpg",
        description:"fashion heirloom pok pok marfa humblebrag, it on bird a put bulbEdison axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        name:"Gian Lois",
        position:"Content Creator",
        picture:"./pictures/Gian.jpg",
        description:"I'm GLOCO, a Filipino gamer who's been around for 9 years. My Let's Plays are a mix of epic roasts (delivered with love, of course) and geeking out over anime. Lately, I've been exploring new content, but gaming will always be my first love!"
    },
    {
        name:"Mary Loi",
        position:"Filipina Idol",
        picture:"./pictures/Maloi.jpg",
        description:"I take you from swaying to soulful ballads under the moonlight to jumping on your feet with fiesta anthems.  My music is a kaleidoscope of emotions, a reflection of the rich culture I come from, all wrapped up in catchy melodies. So, let's go on this musical adventure together!"
    }
]
const id = document.getElementById("id");
const fname = document.getElementById("name");
const position = document.getElementById("status");
const description = document.getElementById("description");

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const submit = document.getElementById("submit");
var value = 0;

next.addEventListener("click",()=>{
    value += 1;
    loop();
    values();
});
prev.addEventListener("click",()=>{
    value -= 1;
    loop();
    values();
});
submit.addEventListener("click",()=>{
    let random = Math.floor(Math.random() * People.length);
    value = random;
    values();
});
const loop = () => {
    if(value < 0)
    {
        value = People.length-1;
    }
    else if(value > People.length -1)
    {
        value = 0;
    }
}
const values = () =>{
    id.style.backgroundImage = "url('"+People[value].picture+"')";
    fname.innerHTML = People[value].name;
    position.innerHTML = People[value].position;
    description.innerHTML = People[value].description;
}