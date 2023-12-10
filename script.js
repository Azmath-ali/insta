var arr=[
    {profile:"https://i.pinimg.com/564x/de/23/5a/de235a4b281087ed9b431db14beb6d93.jpg",img:"https://i.pinimg.com/564x/43/5e/41/435e419f39eb50fb900e9f667af79db7.jpg"},
    {profile:"https://i.pinimg.com/564x/4c/05/ef/4c05ef8f948dead6868913c56f962d3c.jpg",img:"https://i.pinimg.com/564x/47/3f/6d/473f6dd0bf5193f29085f0d5c40560e9.jpg"},
    {profile:"https://i.pinimg.com/564x/e5/75/a2/e575a2ad4360bfea06dc9a44dec8f3ac.jpg",img:"https://i.pinimg.com/564x/96/e7/1e/96e71e41d205957d04ed9f0c3a4b2023.jpg"},
    {profile:"https://i.pinimg.com/564x/16/fc/ea/16fceaf39c332d09e98e2ba47beb0e32.jpg",img:"https://i.pinimg.com/564x/33/0f/08/330f08c8c02817d4ffaad49aa2cb6dde.jpg"},
    {profile:"https://i.pinimg.com/736x/4e/c6/f5/4ec6f5bae68ce11c2f91091f0529b4e6.jpg",img:"https://i.pinimg.com/564x/ab/9c/b7/ab9cb76ff12053a1a02cfdfd76d8a797.jpg"},
    {profile:"https://i.pinimg.com/564x/5a/41/81/5a418196e51b1bc489d6b9dbff1c1c92.jpg",img:"https://i.pinimg.com/564x/30/71/cb/3071cba353f95edef8ff5a31ffcf2bb4.jpg"}
]



var clutter=""

arr.forEach(function(val,index){

    clutter+=` <div class="gola">
    <img id="${index}" src=" ${val.profile}" alt="">
</div>
`
})



document.querySelector("#box1").innerHTML=clutter


var count=0


document.querySelector("#box1").addEventListener("click",function(val){
    document.querySelector("#fullscreen").style.display="block"
    document.querySelector("#fullscreen").style.backgroundImage=`url(${arr[val.target.id].img})`

    setTimeout(function(){
        document.querySelector("#fullscreen").style.display="none"
    },3000)

    if(count<100){
        setInterval(function(){
             document.querySelector("#short-line").style.width=`${count}%`
            count++
        },30)
    }
    else{
        count=0
    }
})


document.querySelector("#main").addEventListener("click",function(){
    window.refresh()
})