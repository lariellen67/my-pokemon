import { Message } from 'semantic-ui-react';

import pokemon from '../../assets/kyogre.png';
import img from '../../assets/pokemon-card.png';
import { Fragment, WinCardMessage, FrontImage, BackImage } from './styles';

function Card() {
  return (
    <Fragment>
      <WinCardMessage>
        <Message
          icon="gift"
          header="Congratulations!"
          content="You winned a pokemon card"
        />
      </WinCardMessage>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FrontImage src={img} />
          </div>
          <div className="flip-card-back">
            <BackImage src={pokemon} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { Card };
