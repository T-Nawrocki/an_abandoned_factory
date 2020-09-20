import { storyText } from './StoryText'

export const storyStages = [
  {
    name: "Restore the main chamber",
    partsCost: 15000,
    inspirationCost: 0,
    description: storyText.mainChamber
  },
  {
    name: "Install environment purification system",
    partsCost: 100000,
    inspirationCost: 5000,
    description: storyText.environmentPurification
  },
  {
    name: "Construct raw material input lines",
    partsCost: 750000,
    inspirationCost: 25000,
    description: storyText.inputLines
  },
  {
    name: "Build the Heart",
    partsCost: 1500000,
    inspirationCost: 100000,
    description: storyText.buildHeart
  },
  {
    name: "Step into the Heart",
    partsCost: 5000000,
    inspirationCost: 750000,
    description: storyText.winGame
  },

]
