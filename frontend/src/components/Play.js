import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'
import { PlayCountContext } from '../hooks/PlayCountContext'
import fetchQuestions from '../Utils/fetchQuestions'

import Exercises from './Exercises'
import Loader from './Loader'


const Play = ({ history }) => {
    const { total, success, fail, setFlag, setFail, } = useContext(PlayCountContext)

    const {
        first,
        setFirst,
        second,
        setSecond,
        third,
        setThird,
        fourth,
        setFourth,
        fifth,
        setFifth,
        loading,
        setLoading,
        expressions,
        setExpressions,
        user,
        setUser,
    } = useContext(GlobalContext)

    const inState = [first, second, third, fourth, fifth]

    localStorage.setItem('answers', JSON.stringify(inState))

    const playInfo = [total, success, fail]

    localStorage.setItem('playHistory', JSON.stringify(playInfo))

if(fail >2){
    history.push('./StopPlay')
}

    if (!user) {
        const userInfo = localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null
        setUser(userInfo)
        history.push('/')
    }

    const getQuestions = async () => {
        const q = await fetchQuestions()
        setExpressions(q)
        setFirst('')
        setSecond('')
        setThird('')
        setFourth('')
        setFifth('')
        setFail(0)
    }

    const confirmHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        if (
            first === expressions[0].answer &&
            second === expressions[1].answer &&
            third === expressions[2].answer &&
            fourth === expressions[3].answer &&
            fifth === expressions[4].answer
        ) {
            setFlag(true)
        } else {
            setFlag(false)
        }
        setLoading(false)
        history.push('/result')
    }


    return (
        <Container>
            {user &&
                <Row className='p-1 text-info'>
                    Welcome {user.name}
                </Row>}
            {/* {playCount > 2 && <StopPlay />} */}
            {loading && <Loader />}
            {user && (
                <Container>
                    <Row>                        
                        <Col align='center'>
                            <Button
                                variant='info'
                                className='sbg'
                                onClick={getQuestions}
                            >Get New Questions
                            </Button>
                        </Col>
                    </Row>
                    {expressions.length !== 0 && (
                        <>
                            <Row className='my-3 justify-content-between mx-auto text-info'>
                                <Col as='h4' md={4} xs={5} className='text-center'>Questions</Col>
                                <Col lg={2} md={2} xs={1}></Col>
                                <Col as='h4' md={6} xs={5} className='text-center'>Answers</Col>
                            </Row>
                            {expressions.map((item) => (
                                <Exercises
                                    key={item._id}
                                    id={expressions.indexOf(item)}
                                    expression={item.question}
                                    inState={inState}
                                />
                            ))}
                            <Row className='px-3 justify-content-center'>
                                <Col className='text-center'>
                                <Button type='submit'
                                    md={4}
                                    onClick={confirmHandler}
                                    className='sbg mb-5'>
                                    <strong className='text-info'>Check The Result</strong></Button>
                                </Col>
                            </Row>
                        </>
                    )}
                </Container>
            )}
        </Container>)
}
export default Play