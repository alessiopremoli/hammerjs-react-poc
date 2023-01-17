import './App.css';
import PinchableImage from './PinchableImage.component';
import { Children } from 'react'


function App() {

  const images = [
    'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg',
    'https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg',
    'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg',
    'https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg'


  ]

  return (
    <div className="App">
      <main>
        {
          Children.toArray(images.map(i => (
            <PinchableImage imageId={i} />
          )))
        }
      </main>
    </div>
  );
}

export default App;
