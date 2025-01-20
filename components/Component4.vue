<template>
   <div class="grid-container">
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/17/a01e0d48-d2ca-4f42-b5bd-86c013616929.jpg " alt="Dis Giyim">
            
        </div>
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/17/5341dc12-1c41-4642-a332-1ad09e8877d2.jpg" alt="Triko">
            
        </div>
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/17/64becaa4-7045-4a8d-bb7b-570f978dfde5.jpg" alt="Jean">
            
        </div>
      </div>
        <div class="grid-container2">
        <div class="grid-item2">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/10/4cabdf48-1a85-49b9-9f49-8aafc33fcc53.png" alt="Naturel Tonlar">
            
        </div>
        <div class="grid-item2">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/10/67130fca-df94-4f25-894f-ed4f04b71bd3.png" alt="Sweatshirt">
            
        </div>
        <div class="grid-item2">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/10/56534d9f-1446-4d37-a47c-0e582287ea43.png" alt="Sweatshirt">
            
        </div>
        <div class="grid-item2">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/10/17381c0a-0ae0-4b53-a8cc-be91c4d25b79.png" alt="Sweatshirt">
            
        </div>
        <div class="grid-container3">
         <div class="grid-item3">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/14/a650d68f-312f-4d55-b5c5-439513f1496d.jpg" alt="Sweatshirt">
            
        </div>
      </div>
      </div>
      
    
  </template>
  
  <script>
  export default {
    name: "Component4",
  };
  </script>
  
  <style scoped>
  .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 100%;
            max-width: 1500px;
        }

        .grid-item {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }

        .grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .grid-item:hover img {
            transform: scale(1.1);
        }

        .grid-item .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .grid-item:hover .overlay {
            opacity: 1;
        }

        .overlay h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .overlay a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            border: 2px solid white;
            padding: 5px 15px;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        .overlay a:hover {
            background: white;
            color: black;
        }
        .grid-container2 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            width: 300%;
            max-width: 1500px;
        }

        .grid-item2 {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }

        .grid-item2 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .grid-item2:hover img {
            transform: scale(1.1);
        }

        .grid-item2 .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .grid-item2:hover .overlay {
            opacity: 1;
        }

        .overlay h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .overlay a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            border: 2px solid white;
            padding: 5px 15px;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        .overlay a:hover {
            background: white;
            color: black;
        }
        .grid-container3 {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 10px;
            width: 410%;
            max-width: 2000px;
        }

        .grid-item3 {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }

        .grid-item3 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .grid-item3:hover img {
            transform: scale(1.1);
        }

        .grid-item3 .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .grid-item3:hover .overlay {
            opacity: 1;
        }

        .overlay h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .overlay a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            border: 2px solid white;
            padding: 5px 15px;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        .overlay a:hover {
            background: white;
            color: black;
        }
  
  
  </style>
  