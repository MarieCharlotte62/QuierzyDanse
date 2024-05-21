<?php

namespace App\Entity;

use App\Repository\GroupeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: GroupeRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => 'groupe:item']),
        new GetCollection(normalizationContext: ['groups' => 'groupe:list'])
    ],
    paginationEnabled: false,
)]

class Groupe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['groupe:list', 'groupe:item'])]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(['groupe:list', 'groupe:item'])]
    private ?string $nom_groupe = null;

    #[ORM\OneToMany(targetEntity: Horaire::class, mappedBy: 'horaire_groupe')]
    #[Groups(['groupe:list', 'groupe:item'])]
    private Collection $horaires;

    public function __construct()
    {
        $this->horaires = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomGroupe(): ?string
    {
        return $this->nom_groupe;
    }

    public function setNomGroupe(string $nom_groupe): static
    {
        $this->nom_groupe = $nom_groupe;

        return $this;
    }

    /**
     * @return Collection<int, Horaire>
     */
    public function getHoraires(): Collection
    {
        return $this->horaires;
    }

    public function addHoraire(Horaire $horaire): static
    {
        if (!$this->horaires->contains($horaire)) {
            $this->horaires->add($horaire);
            $horaire->setHoraireGroupe($this);
        }

        return $this;
    }

    public function removeHoraire(Horaire $horaire): static
    {
        if ($this->horaires->removeElement($horaire)) {
            // set the owning side to null (unless already changed)
            if ($horaire->getHoraireGroupe() === $this) {
                $horaire->setHoraireGroupe(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->getNomGroupe();
    }
}
