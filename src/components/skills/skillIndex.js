const frontend = ['html5', 'css3', 'javascript', 'sass', 'bootstrap', 'pug', 'react', 'redux', 'next'];
const backend = ['nodejs', 'express', 'mongodb', 'mongoose', 'passportjs', 'firebase', 'cloudinary'];
const other = ['git', 'npm', 'webpack', 'heroku', 'github', 'jest'];

export const frontendImages = [];
export const backendImages = [];
export const otherImages = [];

gatherImages(frontend, frontendImages, 'frontend');
gatherImages(backend, backendImages, 'backend');
gatherImages(other, otherImages, 'other');

function gatherImages(skillNames, images, type) {
  skillNames.forEach((skill, index) => {
    images.push({
      id: index + 1,
      source: process.env.PUBLIC_URL + `/skills/${type}/${skill}.png`,
      name: skill
    });
  });
}




