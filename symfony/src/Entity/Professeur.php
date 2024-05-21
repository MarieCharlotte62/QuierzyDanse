<?php

namespace App\Entity;

use App\Repository\ProfesseurRepository;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProfesseurRepository::class)]
#[Vich\Uploadable]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => 'professeur:item']),
        new GetCollection(normalizationContext: ['groups' => 'professeur:list'])
    ],
    paginationEnabled: false,
    cacheHeaders: [
        'max_age' => 60,
        'shared_max_age' => 120,
        'vary' => ['Authorization', 'Accept-Language']
    ]
)]

class Professeur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['professeur:list', 'professeur:item'])]
    private ?int $id = null;

    #[ORM\Column(length: 25)]
    #[Assert\Length(max: 25, maxMessage: "Le prénom ne peut pas dépasser {{ limit }} caractères")]
    #[Groups(['professeur:list', 'professeur:item'])]
    private ?string $prenom = null;

    #[Vich\UploadableField(mapping: 'professeur', fileNameProperty: 'nom_photo')]
    #[Groups(['professeur:list', 'professeur:item'])]
    private ?File $imageFile = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['professeur:list', 'professeur:item'])]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(length: 50)]
    #[Groups(['professeur:list', 'professeur:item'])]
    private ?string $nom_photo = null;

    #[ORM\Column(length: 300)]
    #[Assert\Length(max: 300, maxMessage: "La présentation ne peut pas dépasser {{ limit }} caractères")]
    #[Groups(['professeur:list', 'professeur:item'])]
    private ?string $presentation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNomPhoto(): ?string
    {
        return $this->nom_photo;
    }

    public function setNomPhoto(?string $nom_photo): static
    {
        $this->nom_photo = $nom_photo;

        return $this;
    }

    public function getPresentation(): ?string
    {
        return $this->presentation;
    }

    public function setPresentation(string $presentation): static
    {
        $this->presentation = $presentation;

        return $this;
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageFile(?File $nom_photo = null): static
    {
        $this->imageFile = $nom_photo;

        if ($nom_photo) {
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
}
