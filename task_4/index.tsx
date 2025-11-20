import { useState } from 'react';

type RefactoredBlockProps =
  | {
      type: 'image';
      mouseEnterCallback: () => void;
      imgSrc: string;
      imgAlt: string;
    }
  | {
      type: 'content';
      mouseEnterCallback: () => void;
      content: string;
    }
  | {
      type: 'address';
      mouseEnterCallback: () => void;
      userData: {
        country: string;
        street: string;
      };
    };

const RefactoredBlock = (props: RefactoredBlockProps) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    props.mouseEnterCallback();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? 'active' : ''}>
      {props.type === 'image' && <img src={props.imgSrc} alt={props.imgAlt} />}
      {props.type === 'content' && <p>{props.content}</p>}
      {props.type === 'address' && (
        <address>
          country: {props.userData.country}, street: {props.userData.street}
        </address>
      )}
    </div>
  );
};
