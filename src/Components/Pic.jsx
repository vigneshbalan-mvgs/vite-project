import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeathNote from '../assets/DeathNote.jpg';
import Naruto from '../assets/Naruto.jpg';
import OnePiece from '../assets/OnePiece.jpg';
import OnePunchMan from '../assets/OnePunchMan.jpg';
import SilentVoice from '../assets/SilentVoice.jpg';

function Pic() {
    return (
        <div className="d-flex justify-content-around mt-5 pt-5 flex-wrap gap-3 mb-3 ">
            
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {DeathNote} />
            <Card.Body>
                <Card.Title>Death Note</Card.Title>
                    <Card.Text>
                        A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note,..
                    </Card.Text>
                <Button variant="primary" href='https://aniwatch.to/death-note-60?ref=search'>To Watch</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {Naruto} />
            <Card.Body>
                <Card.Title>Naruto</Card.Title>
                    <Card.Text>
                        Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrif..
                    </Card.Text>
                <Button variant="primary" href='https://aniwatch.to/naruto-677'>To Watch</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {OnePiece} />
            <Card.Body>
                <Card.Title>OnePiece</Card.Title>
                    <Card.Text>
                        Gold Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existenc.
                    </Card.Text>
                <Button variant="primary" href='https://aniwatch.to/one-piece-100'>To Watch</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {OnePunchMan} />
            <Card.Body>
                <Card.Title>OnePunchMan</Card.Title>
                    <Card.Text>
                    The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that ..
                    </Card.Text>
                <Button variant="primary" href='https://aniwatch.to/one-punch-man-63?ref=search'>To Watch</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {SilentVoice} />
            <Card.Body>
                <Card.Title>A Silent Voice</Card.Title>
                    <Card.Text>
                    As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the
                    </Card.Text>
                <Button variant="primary" href='https://aniwatch.to/a-silent-voice-11?ref=search'>To Watch</Button>
            </Card.Body>
        </Card>
            

        </div>
  );
}

export default Pic;