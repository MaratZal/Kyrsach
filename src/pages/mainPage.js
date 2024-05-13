import {  Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex  items-center flex-col justify-start">
                <div>
                <h1 className="text-zinc-900 text-4xl font-roboto p-5 text-center">Особые напитки</h1>
                <div className="flex gap-5 p-5 flex-col md:flex-row flex-wrap justify-center">
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/coffe_1.jpeg"
                                        alt="coffe_1"/>
                            
                            <CardContent>
                                <h3>Латинский кофе</h3>
                                <p>Самое то перед курсачом</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/coffe_2.jpeg"
                                        alt="coffe_1"/>
                            <CardContent>
                                <h3>Армянский кофе</h3>
                                <p>Кофе в джазве на песке из Сахары, придаёт бешенный заряд бодрости</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/coffe_3.jpeg"
                                        alt="coffe_1"/>
                            <CardContent>
                                <h3>Бразильский кофе</h3>
                                <p>Горячий как бразильские танцы</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/coffe_4.jpeg"
                                        alt="coffe_1"/>
                            <CardContent>
                                <h3>Испанский кофе</h3>
                                <p>За него не испытаешь стыд</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                </div>
                <div>
                <h1 className="text-zinc-900 text-4xl font-roboto p-5 text-center">Акции</h1>
                <div className="flex gap-5 p-5 flex-col md:flex-row flex-wrap justify-center">
                    <Card sx={{ width: 380, height: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/acii_1.jpeg"
                                        alt="acii_1"/>
                            
                            <CardContent>
                                <h3>2 по цене 1</h3>
                                <p>При покупке 2 кофе с пометкой, на оба напитка идет 50% скидка</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380, height: 380}}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/acii_2.jpeg"
                                        alt="acii_2"/>
                            <CardContent>
                                <h3>100-тый гость</h3>
                                <p>Каждый 100-тый гость получает бесплатную кружку секретного кофе Бон-Бон </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380, height: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/acii_3.jpeg"
                                        alt="acii_3"/>
                            <CardContent>
                                <h3>День бразильского кофе</h3>
                                <p>На бразильский кофе скидка 20% процентов</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/acii_4.jpeg"
                                        alt="acii_4"/>
                            <CardContent>
                                <h3>День доброты</h3>
                                <p>За пожертвование в дом сироток вы получаете месячную скидку на любой кофе</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </>

    )
}