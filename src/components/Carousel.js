import React, { useEffect, useState } from "react"
import '../App.css';
import less from "../assets/less.png"
import greater from "../assets/greater.png"
function Carousel() {
  let contents = [{ name: "Anita", single: "Paradinha", date: "22/12" }, { name: "Roberto Carlos", single: "Paradinha", date: "22/12" }, { name: "Leo Santana", single: "Contatinho", date: "10/01" }, { name: "Guns And Roses", single: "New Single", date: "No date" }]
  const [count, setCount] = useState(1)
  const [carousel_content, setCarousel_content] = useState(contents[0])
  const [animate, setAnimate] = useState(false)
  const incrementCount = () => setCount(count + 1)
  const decrementtCount = () => setCount(count - 1)
  useEffect(() => {
    //react-hooks/exhaustive-deps
    const refreshCarousel = () => setCarousel_content(contents[count])
    refreshCarousel()


  }, [count])

  const previousContent = (e) => {
    document.documentElement.style.setProperty('--deslocation', "-600px")
    document.documentElement.style.setProperty('--out_deslocation', "1200px")
    document.documentElement.style.setProperty('--second_deslocation', "500px")
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
      if (e.target) {
        if (count === 0) {
          setCount(contents.length - 1)
          return
        }
        decrementtCount()
        console.log(count)
      }
    }, 400);

  }

  const nextContent = (e) => {

    document.documentElement.style.setProperty('--deslocation', "600px")
    document.documentElement.style.setProperty('--out_deslocation', "0px")
    document.documentElement.style.setProperty('--second_deslocation', "-800px")
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
      if (e.target) {
        if (count >= contents.length - 1) {
          setCount(0)
          return
        }
        incrementCount()
        console.log(count)
      }
    }, 400);

  }

  return (
    <div class="container">
      <div className="allContent">
        <img className={animate ? "pulse" : "inpulse"} src={less} onClick={(e) => previousContent(e)} alt="less" />
        <div className="border">
          <div className={!animate ? "card " : "card active"}>
            <p>Name: {carousel_content.name}</p>
            <p>Single: {carousel_content.single}</p>
            <p>Date: {carousel_content.date}</p>
          </div>
        
        </div>
        
        <img className={animate ? "pulse" : "inpulse"} src={greater} onClick={(e) => nextContent(e)} alt="greather" />
      </div>
    </div>
  );
}

export default Carousel;
