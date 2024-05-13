import Footer from "../components/Footer";
import Header from "../components/Header";
import {  Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function IventsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex  items-center flex-col justify-start" >
            <div>
                <h1 className="text-zinc-900 text-4xl font-roboto p-5 text-center">Уникальные события</h1>
                <div className="flex gap-5 p-10 flex-col md:flex-row flex-wrap justify-center">
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                        component="img"
                        alt="latte_art"
                        height="140"
                        image="img/latte_art.jpeg"
                        />
                        <CardContent>
                            <Typography  gutterBottom variant="h5" component="div">
                                Латте арт
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Событие, призванное погрузить гостей в мир творчества и красоты, раскрывая потенциал обычной чашки кофе в настоящее произведение искусства. Это вечер, когда любители кофе и творчества могут собраться вместе, создавать узоры на поверхности латте.
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Записаться на событие</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                        component="img"
                        alt="micro"
                        height="140"
                        image="img/micro.jpeg"
                        />
                        <CardContent>
                            <Typography  gutterBottom variant="h5" component="div">
                                Стэндап
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Событие, приглашающее гостей окунуться в мир юмора прямо за чашечкой ароматного кофе. Это вечер, когда кофейная атмосфера сочетается с острым юмором, создавая атмосферу, которая расслабляет, веселит и приносит удовольствие каждому гостю.
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Записаться на событие</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                        component="img"
                        alt="music"
                        height="140"
                        image="img/music.jpeg"
                        />
                        <CardContent>
                            <Typography  gutterBottom variant="h5" component="div">
                                Ночь Джаза
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                             Событие, призванное привнести атмосферу стиля и уюта в мир кофейной культуры. Это вечер, когда аромат свежесваренного кофе сливается с мелодиями джазовой музыки, создавая неповторимую атмосферу, которая наполняет сердца гостей теплом и восторгом.
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Записаться на событие</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                        component="img"
                        alt="dnd"
                        height="140"
                        image="img/dnd.png"
                        />
                        <CardContent>
                            <Typography  gutterBottom variant="h5" component="div">
                                Вечер настолок
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Уютное и веселое событие, которое приглашает гостей окунуться в мир настольных игр, сопровождаемый ароматным кофе и дружественной атмосферой. Это вечер, когда любители настольных игр могут собраться вместе, чтобы провести время весело и увлекательно, наслаждаясь любимыми играми и общением друг с другом.
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Записаться на событие</Button>
                        </CardActions>
                    </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}