import React, {useState, useEffect} from 'react';
import './Pagination.css';


function Pagination() {
    const pages =5
    const numberOfPages = []
    for(let i=1; i<=pages; i++){
        numberOfPages.push("0"+i)
    }
    const [currentButton, setCurrentButton]= useState(1)
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])
      
    useEffect(() => {
          let tempNumberOfPages= [...numberOfPages]
          
          let dotsInitial=  '______'
          let dotsLeft = '______'
          let dotsRight = '______'

          if (currentButton >= 1 && currentButton <= 4){
              tempNumberOfPages = ['01', dotsInitial,'02','03','04', '05']
          }
          else if(currentButton === 2){
              const sliced = numberOfPages.slice(1, 5)
              tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
          }

          else if(currentButton>2 && currentButton < numberOfPages.length - 2){
              const sliced1 = numberOfPages.slice(currentButton-2, currentButton)
              const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
              tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
          }
         
          else if(currentButton === dotsInitial){
                setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1)
            }
          else if(currentButton === dotsRight){
              setCurrentButton(arrOfCurrButtons[3] + 2)
          }
          else if(currentButton === dotsLeft){
            setCurrentButton(arrOfCurrButtons[3] - 2)
        }
            
          setArrOfCurrButtons(tempNumberOfPages)
    }, [currentButton])


    return(    
        <div className='pagination-container'>
            {arrOfCurrButtons.map((page, index) =>{
                return(
                    <a 
                    key={index}
                    onClick={() => setCurrentButton(page)}
                    href="!#" 
                    className={currentButton === page ? 'active' : "" }
                   >{page}</a>
                )
            })} 
       
        </div>
        
    )
}

export default Pagination;
