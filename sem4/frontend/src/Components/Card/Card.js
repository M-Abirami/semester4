
import React from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate  } from "react-router-dom";

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol,MDBCardHeader } from 'mdb-react-ui-kit';

export default function Card() {
  let navigate = useNavigate(); 
const profilepage = () => {
  let path = `/Profile`; 
  navigate(path);
}
const profile = () => {
  let path = `/Profile1`; 
  navigate(path);
}
const pro = () => {
  let path = `/Profile2`; 
  navigate(path);
}
const prof = () => {
  let path = `/Profile3`; 
  navigate(path);
}
 
  return (
    <div style={{backgroundColor:"#66cc99"}}>
    <h1 style={{marginLeft:550,fontSize:45,marginTop:10}}>CADET LIST</h1>
    
   
      
    <MDBRow style={{marginTop:45}}className='row-cols-1 row-cols-md-6 g-4'>
   
      
    
      <MDBCol>
        <MDBCard>
        
          <MDBCardImage
             onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            
            position='top'
            // height={400}
            width="100%"
           
          />
          <MDBCardBody>
       
            <MDBCardTitle>NAME</MDBCardTitle>
           
            <MDBCardText>
          
             ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           onClick={profile}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            DHANUSHYA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           onClick={pro}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            AJITHA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
           onClick={prof}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            PRIYA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol> <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
             PRIYA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
            ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
             PRIYA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
             PRIYA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
            width="100%"
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
             PRIYA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
              AJITHA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
              AJITHA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
          />
          <MDBCardBody>
            <MDBCardTitle>NAME</MDBCardTitle>
            <MDBCardText>
             DHANUSHYA
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            onClick={profilepage}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKknbKQumk9ULzcoCZCNlGvWWUwwcR381LUw&usqp=CAU'
            alt='...'
            position='top'
            // height={400}
          />
          <MDBCardBody>
            <MDBCardTitle>Name</MDBCardTitle>
            <MDBCardText>
              ABIRAMI
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    
  );
  
}


