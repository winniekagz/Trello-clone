import Avatar from 'react-avatar';
import seedrandom from 'seedrandom';

export default function CustomAvatar({name}:{name:string}) {
    function generateColorCode(username: string): string {
        const seed = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const createSeededRNG  = seedrandom(seed.toString());
      
        const randomHex = () => Math.floor(createSeededRNG() * 256).toString(16).padStart(2, '0');
        return `#${randomHex()}${randomHex()}${randomHex()}`;
      }
  return (

    <div>
        <Avatar  name={name} color={generateColorCode(name)} round size='60'/>
    </div>
  )
}

