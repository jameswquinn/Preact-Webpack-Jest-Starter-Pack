import { h } from 'preact';
import { HelloWorld } from './HelloWorld';
import responsiveImage from '../../public/responsive-image.png';

export function App() {
  return (
    <div class="app">
      <h1>My Preact App</h1>
      <HelloWorld />
      <div class="responsive-image-container">
        <picture>
          <source
            srcSet={`${responsiveImage.src.replace('.png', '.webp')}`}
            type="image/webp"
          />
          <img
            src={responsiveImage.src}
            srcSet={responsiveImage.srcSet}
            sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 900px"
            alt="Responsive Image"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}
