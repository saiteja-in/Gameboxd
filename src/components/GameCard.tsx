import { Game } from '../Hooks/useGames';
import { Card, CardBody, HStack, Heading, Image} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedimage from '../services/image-url';
interface Props{
    game:Game;
}

const GameCard = ({game}:Props) => {
  return (
    <Card >
        <Image src={getCroppedimage(game.background_image)}/>
        <CardBody>
            <HStack marginBottom={3} justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard
