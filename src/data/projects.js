// Machine Learning Projects
export const mlProjects = [
    {
      id: 1,
      title: "Anomaly Detection in Manufacturing",
      description: "Developed a machine learning pipeline for detecting and classifying defects in glass bottles using autoencoders and CNNs. The system effectively identifies broken or contaminated bottles with high accuracy.",
      tech: ["Python", "TensorFlow", "Autoencoders", "CNN", "Anomaly Detection"],
      image: "/api/placeholder/600/350",
      imageSrc: "https://images.pexels.com/photos/4176427/pexels-photo-4176427.jpeg",
      imageCaption: "Bottles on an industrial production line",
      githubRepo: "https://github.com/MikaParssinen/Applied-Machine-Learning",
      fullReport: {
        title: "Anomaly detection and image classification of glass bottles in manufacturing",
        authors: "Mika Pärssinen and Marcus Hammarström",
        date: "January 20, 2025",
        abstract: "To reduce cost, reduce waste and make production more efficient, it is important to find reliable methods of automating the task of detecting anomalies in production lines. Our paper provides a proof of concept for a machine learning pipeline that can detect anomalies in images as well as classifying these anomalies. The pipeline we propose consists of an autoencoder to reconstruct images, an anomaly detection procedure that uses reconstruction error to classify anomalies and finally a CNN-model that is used to specify the type of anomaly that has been detected.",
        results: "With just one error in classifying anomalies, our anomaly detection procedure is shown to accurately be able to classify anomalies. And overall, as our CNN only made two errors in classifying the anomalies, we can say that we also are able to classify the type of anomaly. However, with limitations in mind due to the small dataset size, we cannot be certain how well this generalizes to real-world applications."
      }
    },
    {
      id: 2,
      title: "Credit Card Customer Segmentation",
      description: "Applied unsupervised learning techniques to segment credit card customers based on their spending habits. This analysis helps tailor services like saving plans and premium credit cards to specific customer groups.",
      tech: ["Python", "Hierarchical Clustering", "DBSCAN", "Data Analysis"],
      image: "/api/placeholder/600/350",
      imageSrc: "https://images.pexels.com/photos/6266627/pexels-photo-6266627.jpeg",
      githubRepo: "https://github.com/MikaParssinen/Applied-Machine-Learning",
      imageCaption: "Credit cards and money",
      fullReport: {
        title: "Problem solving with unsupervised learning",
        authors: "Mika Pärssinen and Marcus Hammarström",
        date: "December 16, 2024",
        abstract: "Knowing the spending habits of your customers is a key factor in the success of any business. By segmenting their customers into smaller groups, it is possible to tailor their services to better meet the needs of those individual groups. In this assignment, we segment the customers of a credit card company based on their spending habits in order to offer services such as saving plans and premium credit cards.",
        results: "Hierarchical clustering identified 5 distinct customer segments including 'Medium Activity, Low Spenders with Higher Full Payment Rate', 'High Spenders with Large Balances', and 'Customers with Low Purchases, High Cash Advances'. DBSCAN did not provide useful clusters for this dataset. The identified clusters enable targeted marketing strategies for each customer segment."
      }
    },
    {
      id: 3,
      title: "Football Player Position Prediction",
      description: "Built supervised learning models to predict the preferred position of football players based on their attributes. Compared different algorithms to find the most accurate model for this classification task.",
      tech: ["Python", "SVM", "Random Forest", "Naive Bayes", "Classification"],
      image: "/api/placeholder/600/350",
      imageSrc: "https://images.pexels.com/photos/3684122/pexels-photo-3684122.jpeg",
      githubRepo: "https://github.com/MikaParssinen/Applied-Machine-Learning",
      imageCaption: "Fottball players",
      fullReport: {
        title: "Comparison of the performance of different supervised models",
        authors: "Mika Pärssinen and Marcus Hammarström",
        date: "December 2, 2024",
        abstract: "To get the most use of a football player, it is best to put them in a position where their specific set of skills shine. In our assignment we predict what preferred position a football player has, based on their attributes from the FIFA 18 Players database. We will limit the classification problem to just outfield players.",
        results: "The Support Vector Machine (SVM) model achieved the best accuracy (79.38%) but had the longest runtime. Random Forest also performed well (75.16% accuracy), while Gaussian Naive Bayes achieved 64.68% accuracy. The feature vectors were not distinct enough for each position to create a predictive model with accuracy above 80%."
      }
    },
    {
      id: 4,
      title: "MNIST Digit Classification",
      description: "Implemented and compared neural network architectures for classifying handwritten digits from the MNIST dataset. Explored the differences between traditional artificial neural networks and convolutional neural networks.",
      tech: ["Python", "TensorFlow", "CNN", "ANN", "Deep Learning"],
      image: "/api/placeholder/600/350",
      imageSrc: "https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg",
      githubRepo: "https://github.com/MikaParssinen/Applied-Machine-Learning",
      imageCaption: "Written digits",
      fullReport: {
        title: "Neural networks and Deep learning",
        authors: "Mika Pärssinen and Marcus Hammarström",
        date: "December 29, 2024",
        abstract: "In this project, we are tasked with what is considered the 'Hello World' of computer vision. Our task is to use the MNIST handwritten digits database to develop neural networks and deep learning models for image classification.",
        results: "The CNN model clearly outperformed the ANN model in all evaluation metrics. The CNN achieved 99.42% test accuracy and 0.9942 F1 score, compared to the ANN's 91.36% test accuracy and 0.9138 F1 score. This was expected since CNN models are designed to work with image data and can capture spatial information that ANN models cannot."
      }
    }
  ];
  
  // Mobile Projects
  export const mobileProjects = [
    {
      id: 7,
      title: "Augmented Reality for Smart Room",
      description: "Developed an AR application that interacts with IoT devices in MDU's Smart Room. The app overlays digital information on physical room elements and allows real-time control of smart devices through a mobile interface.",
      tech: ["Unity", "ARCore", "RESTful API", "IoT Integration", "C#", "QR Code Detection"],
      image: "/api/placeholder/600/350",
      imageSrc: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", 
      imageCaption: "AR interface overlaying room elements",
      githubRepo: "https://github.com/MikaParssinen/SmartRoom-AR",
      fullReport: {
        title: "Augmented Reality Interface for Smart Room Control and Visualization",
        authors: "Mika Pärssinen and Group Members",
        date: "February 15, 2025",
        abstract: "This project implements an augmented reality application that enhances interaction with MDU's Smart Room environment. The application provides real-time data visualization and control capabilities for various IoT devices within the room. It features AR overlays on static room elements using QR codes for identification, and includes tracking for one mobile element also using QR code identification. The system integrates with the room's Web-based API to access sensor data and control actuators.",
        results: "The completed application successfully implemented all required features: AR overlays for static room elements, QR code tracking for a mobile element, sensor data visualization, and device state control. The AR interface provides intuitive access to room temperature. Users can control lighting systems settings through the AR interface."
      }
    }
  ];
  
  // AI Projects (Empty for now)
  export const aiProjects = [];
  
  // Bash Projects
  export const bashProjects = [
    {
      id: 11,
      title: "Linux System Manager",
      description: "Developed a comprehensive bash-based system administration tool that provides a menu-driven interface for managing users, groups, and files on Linux systems. The utility simplifies complex administrative tasks through an intuitive console interface.",
      tech: ["Bash", "Linux", "User Management", "File Permissions", "System Administration"],
      image: "/api/placeholder/600/350",
      imageSrc: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg",
      imageCaption: "Linux terminal with system management commands",
      githubRepo: "https://github.com/MikaParssinen/System-Manager-In-Bash",
      fullReport: {
        title: "Linux System Manager - Advanced Administrative Tool",
        authors: "Mika Pärssinen and Erik Isaksson",
        date: "January 28, 2023",
        abstract: "This project focused on creating a user-friendly system administration tool for Linux environments. The System Manager provides an interactive menu that allows administrators to perform common system tasks without needing to remember complex command syntax or parameters. The tool streamlines user and group management, folder operations, and network information retrieval.",
        results: "The System Manager successfully simplifies Linux administration by providing a color-coded, intuitive interface for common tasks. It includes comprehensive user management (creation, modification, deletion), group management with secure permission handling, and folder operations with detailed property viewing and modification options."
      }
    }
  ];