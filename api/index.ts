export default function handler(req: any, res: any) {
  // Handle API routes
  if (req.url?.startsWith('/api/')) {
    // Extract the path after /api/
    const apiPath = req.url.replace('/api', '');
    
    // Handle specific API routes
    if (apiPath === '/ping') {
      return res.json({ message: "Hello from Express server v2!" });
    }
    
    if (apiPath === '/demo') {
      return res.json({ message: "Demo endpoint working!" });
    }
    
    // Default API response
    return res.status(404).json({ error: "API endpoint not found" });
  }
  
  // For non-API routes, this should be handled by the static build
  return res.status(404).json({ error: "Route not found" });
} 