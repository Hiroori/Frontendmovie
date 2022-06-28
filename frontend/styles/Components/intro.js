<div className='htmlAll'>
     <Head>
       <title>Movie List</title>
       <meta name="description" content="Movie List" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <div className='myBG'>
       <NavigationBar></NavigationBar>
       <div className='intro'>
         <Container className='text-dark d-flex justify-content-center align-items-center border'>
           <Row>
             <Col>
                 <div className='title'>Review Film</div>
                 <div className='title'>Kesukaanmu</div>
             </Col>
           </Row>
         </Container>
       </div>
     </div>
   </div>
   
   import { Container, Row,Col,Button } from 'react-bootstrap';

const Intro = (props) => {
   return(

<div className='intro'>
         <Container className='text-dark d-flex justify-content-center align-items-center border text-center'>
           <Row>
             <Col>
                 <div className='title'>Review Film</div>
                 <div className='title'>Kesukaanmu</div>
                 <div className='introButton mt-4 text-center'>
                     <Button variant='dark' onClick={props.scroll}>Lihat Review</Button>
                 </div>
             </Col>
           </Row>
         </Container>
</div>
   )
}
export default Intro
