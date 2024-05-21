<?php

namespace App\Entity;

use App\Repository\HoraireRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: HoraireRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => 'horaire:item']),
        new GetCollection(normalizationContext: ['groups' => 'horaire:list'])
    ],
    paginationEnabled: false,
    cacheHeaders: [
        'max_age' => 60,
        'shared_max_age' => 120,
        'vary' => ['Authorization', 'Accept-Language']
    ]
)]

class Horaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['horaire:list', 'horaire:item'])]
    private ?int $id = null;

    #[ORM\Column(length: 15)]
    #[Groups(['horaire:list', 'horaire:item'])]
    private ?string $jour = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    #[Groups(['horaire:list', 'horaire:item'])]
    private ?\DateTimeInterface $heure_debut = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    #[Groups(['horaire:list', 'horaire:item'])]
    private ?\DateTimeInterface $heure_fin = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(['horaire:list', 'horaire:item'])]
    private ?string $details = null;

    #[ORM\ManyToOne(inversedBy: 'horaires')]
    #[Groups(['horaire:list', 'horaire:item'])]
    private ?Groupe $horaire_groupe = null;

    #[ORM\ManyToOne(inversedBy: 'horaires_discipline')]
    #[Groups(['horaire:list', 'horaire:item'])]
    private ?Discipline $horaire_discipline = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJour(): ?string
    {
        return $this->jour;
    }

    public function setJour(string $jour): static
    {
        $this->jour = $jour;

        return $this;
    }

    public function getHeureDebut(): ?\DateTimeInterface
    {
        return $this->heure_debut;
    }

    public function setHeureDebut(\DateTimeInterface $heure_debut): static
    {
        $this->heure_debut = $heure_debut;

        return $this;
    }

    public function getHeureFin(): ?\DateTimeInterface
    {
        return $this->heure_fin;
    }

    public function setHeureFin(\DateTimeInterface $heure_fin): static
    {
        $this->heure_fin = $heure_fin;

        return $this;
    }

    public function getHoraireGroupe(): ?Groupe
    {
        return $this->horaire_groupe;
    }

    public function setHoraireGroupe(?Groupe $horaire_groupe): static
    {
        $this->horaire_groupe = $horaire_groupe;

        return $this;
    }

    public function getHoraireDiscipline(): ?Discipline
    {
        return $this->horaire_discipline;
    }

    public function setHoraireDiscipline(?Discipline $horaire_discipline): static
    {
        $this->horaire_discipline = $horaire_discipline;

        return $this;
    }

    public function getDetails(): ?string
    {
        return $this->details;
    }

    public function setDetails(?string $details): static
    {
        $this->details = $details;

        return $this;
    }
}
