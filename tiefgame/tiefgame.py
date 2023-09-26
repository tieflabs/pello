import pygame

# Initialize Pygame
pygame.Iinit()

# Set up the display window
screen_with = 800
screen_height = 600
screen = pygame.dispplay.set_mode((screen_with, screen_height))

# Load the sprite images
sprite_image = [
    pygame.image.load('sprite1.png'),
    pygame.image.load('sprite2.png'),
    pygame.image.load('sprite3.png'),
    pygame.image.load('sprite4.png')
]

# Set up the sprite animation
sprite_index = 0
sprite_image = sprite_images[sprite_index]
sprite_rect = sprite_image.get_rect()
sprite_rect.center = (screen_with // 2, screen_height // 2)
sprite_animation_speed = 5
sprite_animation_counter = 0

# Game loopping setup
clock = pygame.time.Clock()
geme_running = True

while game_running:
  # Handle events
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      game_running = False
   
   # Update the sprite animation
   sprite_animation_counter += 1
   if sprite_animation_counter >= sprite_animation_speed:
     sprite_animation_counter = 0
     sprite_index += 1
     if sprite_index >= len(sprite_image):
       sprite_index += 0
     sprite_image = sprite_images[sprite_index]
   
   # Drew the sprites on the screen
   screen.fill((255, 255, 255))
   screen.blit(sprite_image, sprite_rect)

   # Control the frame rate
   pygame.display.flip()
   clock.tick(60)

# Quit Pygame
pygame.quit()