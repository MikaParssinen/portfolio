// Calculate opacity based on scroll position
export const calculateOpacity = (scrollPosition, minScroll = 0, maxScroll = 200, minOpacity = 0.9, maxOpacity = 0.5) => {
    if (scrollPosition <= minScroll) return minOpacity;
    if (scrollPosition >= maxScroll) return maxOpacity;
    
    // Linear interpolation between min and max
    return minOpacity + ((scrollPosition - minScroll) / (maxScroll - minScroll)) * (maxOpacity - minOpacity);
  };
  
  // Format date to human-readable format
  export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Smooth scroll to element
  export const scrollToElement = (elementId, offset = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
      return true;
    }
    return false;
  };