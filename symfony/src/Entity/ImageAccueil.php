<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\ImageAccueilRepository;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ImageAccueilRepository::class)]
#[Vich\Uploadable]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => 'imageAccueil:item']),
        new GetCollection(normalizationContext: ['groups' => 'imageAccueil:list'])
    ],
    paginationEnabled: false,
    cacheHeaders: [
        'max_age' => 60,
        'shared_max_age' => 120,
        'vary' => ['Authorization', 'Accept-Language']
    ]
)]

class ImageAccueil
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['imageAccueil:list', 'imageAccueil:item'])]
    private ?int $id = null;

    #[Vich\UploadableField(mapping: 'imageAccueil', fileNameProperty: 'nom_image')]
    #[Groups(['imageAccueil:list', 'imageAccueil:item'])]
    private ?File $imageFile = null;

    #[ORM\Column(length: 100)]
    #[Groups(['imageAccueil:list', 'imageAccueil:item'])]
    private ?string $nom_image = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['imageAccueil:list', 'imageAccueil:item'])]
    private ?\DateTimeInterface $createdAt = null;


    #[ORM\Column(length: 50)]
    #[Groups(['imageAccueil:list', 'imageAccueil:item'])]
    private ?string $description = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageFile(?File $nom_image = null): static
    {
        $this->imageFile = $nom_image;

        if ($nom_image) {
            $this->createdAt = new \DateTime('now');
        }

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getNomImage(): ?string
    {
        return $this->nom_image;
    }

    public function setNomImage(?string $nom_image): static
    {
        $this->nom_image = $nom_image;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }
}
