import React from 'react';
import Card from "./components/UI/Card";

const App = () => {
    return (
        <div style={{display:"flex"}}>
          <Card
              imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKiPCD8qZBoxL3lIGCE-PMYB1pGQvXPuQ5A&usqp=CAU"}
              title={"Lorem"}
              text={"lorem щось там "}
              backText={"Це зворотня сторона"}
              />
            <Card
                imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKiPCD8qZBoxL3lIGCE-PMYB1pGQvXPuQ5A&usqp=CAU"}
                title={"Lorem"}
                text={"lorem щось там "}
                backText={"Це зворотня сторона"}
            />
            <Card
                imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKiPCD8qZBoxL3lIGCE-PMYB1pGQvXPuQ5A&usqp=CAU"}
                title={"Lorem"}
                text={"lorem щось там "}
                backText={"Це зворотня сторона"}
            />
        </div>
    );
};

export default App;