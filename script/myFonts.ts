
interface FontDefinition {
  name: string;
  url: string;
  format: string;
}

export async function loadFonts(fontList: FontDefinition[]) {
  try {
    const loaders = fontList.map(font =>
      new FontFace(font.name, `url("${font.url}") format("${font.format}")`).load()
    );

    const loadedFonts = await Promise.all(loaders);

    loadedFonts.forEach(font => document.fonts.add(font));

    console.log( 'All fonts loaded!');
  } catch (err) {
    console.error('Error loading fonts:', err);
  }
}