import Footer from "../components/Footer";
import {  Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Header from "../components/Header";

export default function Menu() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex  items-center flex-col justify-start">
                <div>
                <h1 className="text-zinc-900 text-4xl font-roboto p-5 text-center">Горячие напитки</h1>
                <div className="flex gap-5 p-5 flex-col md:flex-row flex-wrap justify-center">
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/americano.jpeg"
                                        alt="americano"/>
                            
                            <CardContent>
                                <h3>Американо</h3>
                                <p>250 р</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/cap.jpeg"
                                        alt="cap"/>
                            <CardContent>
                                <h3>Капучино</h3>
                                <p>250 р</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380}}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/expresso.jpeg"
                                        alt="express"/>
                            <CardContent>
                                <h3>Эспрессо</h3>
                                <p>150 р</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/tea.jpeg"
                                        alt="tea"/>
                            <CardContent>
                                <h3>Чай</h3>
                                <p>150</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                </div>
                <div>
                <h1 className="text-zinc-900 text-4xl font-roboto p-5 text-center">Еда</h1>
                <div className="flex gap-5 p-5 flex-col md:flex-row flex-wrap justify-center">
                    <Card sx={{ width: 380}}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/food2.jpg"
                                        alt="food2"/>
                            <CardContent>
                                <h3>Чизкей</h3>
                                <p>350 р </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/food3.webp"
                                        alt="food3"/>
                            <CardContent>
                                <h3>Вафли</h3>
                                <p>250 р</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/food4.jpeg"
                                        alt="food4"/>
                            <CardContent>
                                <h3>Сэндвич с курицей</h3>
                                <p>250 р</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ width: 380 }}>
                        <CardActionArea>
                            <CardMedia component="img"
                                        height="140"
                                        image="img/food5.jpeg"
                                        alt="food5"/>
                            <CardContent>
                                <h3>Ролл с курицей</h3>
                                <p>250 р</p>
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