// Dans votre service d'authentification (admin/auth.service.ts par exemple)
const MOT_DE_PASSE = 'acces';

export class AuthService {
  estAuthentifie = false;

  authentifier(motDePasse: string): boolean {
    if (motDePasse === MOT_DE_PASSE) {
      this.estAuthentifie = true;
      return true;
    }
    this.estAuthentifie = false;
    return false;
  }

  deconnecter(): void {
    this.estAuthentifie = false;
  }
}
