import {useState, useEffect} from 'react';
import {Container, Col, Row } from "react-bootstrap";
import {ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Microservices Developer", "Web Developer", "A.I. Engineer"];
    const [role, setRole] = useState("");
    const [delta, setDelta] = useState(500);
    const period = 2000;

    useEffect(()=>{
        let ticker = ()  => setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [role])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, role.length -1) : fullText.substring(0, role.length + 1);

        setRole(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if( !isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id='home'>
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="Welcome to my Portfolio"></span>
                        <h1>{`Hi! I'm Umar`}<span className="wrap">{role}</span></h1>                        
                        <p>
                            A software engineer with a passion for developing scalable and robust microservices, 
                            I have worked as a Full-Stack Developer with Java, Spring Boot, Angular js, Node, React js, SQL and NoSQL Databases, and Docker in various projects and organizations. I have a Bachelor's degree in Computer Science from COMSATS University Islamabad and I am currently pursuing my Master's degree in Information Technology from the University of Eastern Finland.
                            <br/>
                            Most recently, I worked as a backend software engineer at UpStart Commerce, 
                            where I developed microservices using Java, Scala, and Akka, integrated payment gateways, improved response times, 
                            and maintained code quality. I also honed my React.js skills by doing courses. 
                            <br/>
                            Previously, I worked as a full stack engineer at Allente Nordic, where I acted as a 
                            lead developer on two projects, designed and integrated a credit card payment solution, and developed front-ends with Angular.js. 
                            I was recognized for my good performance, problem-solving, and teamwork skills. 
                            <br/>
                            I’m dedicated to applying my skills and learn more at a reputable organization with a good culture. 
                            I work well in teams as well as individually and take responsibility of my work. 
                            I’m good at communication with stakeholders and take pride in delivering quality work.
                        </p>
                        <button onClick={ () => console.log('Connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col  xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}