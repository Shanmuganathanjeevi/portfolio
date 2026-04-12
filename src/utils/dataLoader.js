/**
 * Dynamically load all JSON files from a specified directory
 * @param {Object} modules - Object from import.meta.glob()
 * @returns {Array} Array of loaded objects sorted by ID
 */
export async function loadDataFromModules(modules) {
  const items = [];
  
  for (const path in modules) {
    const module = await modules[path]();
    items.push(module.default);
  }
  
  // Sort by ID to maintain consistent order
  return items.sort((a, b) => a.id?.localeCompare(b.id));
}

/**
 * Helper to load projects
 */
export async function loadProjects() {
  const modules = import.meta.glob('/src/data/projects/*.json', { eager: true });
  const items = [];
  
  for (const path in modules) {
    items.push(modules[path].default);
  }
  
  return items.sort((a, b) => a.id?.localeCompare(b.id));
}

/**
 * Helper to load articles
 */
export async function loadArticles() {
  const modules = import.meta.glob('/src/data/articles/*.json', { eager: true });
  const items = [];
  
  for (const path in modules) {
    items.push(modules[path].default);
  }
  
  return items.sort((a, b) => a.id?.localeCompare(b.id));
}
