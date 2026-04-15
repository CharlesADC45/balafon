type DemoRequestData = {
  entreprise: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  description: string;
  date: string;
};

const LOGO_URL = "https://balafon.africadigitalconnect.net/images/balafon-logo2.svg";
const SITE_URL = "https://balafon.africadigitalconnect.net";

export function buildDemoRequestEmail(data: DemoRequestData): string {
  return `
<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Demande de démo BALAFON</title>
  <!--[if mso]>
  <style>table,td{font-family:Segoe UI,Helvetica,Arial,sans-serif;}</style>
  <![endif]-->
</head>
<body style="margin:0; padding:0; background-color:#f0f4f4; font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased;">

  <!-- Wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f4; padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- Logo bar -->
          <tr>
            <td style="padding:0 0 24px; text-align:center;">
              <a href="${SITE_URL}" target="_blank" rel="noopener" style="text-decoration:none;">
                <img src="${LOGO_URL}" alt="BALAFON" width="160" height="44" style="display:inline-block; height:44px; width:auto;" />
              </a>
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e2eaea;">

                <!-- Green header band -->
                <tr>
                  <td style="background-color:#0f6e6e; padding:28px 36px;">
                    <h1 style="margin:0; color:#ffffff; font-size:20px; font-weight:700;">
                      Nouvelle demande de démonstration
                    </h1>
                    <p style="margin:6px 0 0; color:rgba(255,255,255,0.75); font-size:13px;">
                      Un prospect souhaite découvrir la plateforme BALAFON
                    </p>
                  </td>
                </tr>

                <!-- Prospect info -->
                <tr>
                  <td style="padding:28px 36px 0;">
                    <p style="margin:0 0 16px; color:#0f6e6e; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.2px;">
                      Informations du prospect
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8f0ef; border-radius:12px; overflow:hidden;">
                      <tr>
                        <td style="padding:14px 20px; background-color:#f8fbfb; border-bottom:1px solid #e8f0ef;">
                          <span style="color:#64748b; font-size:12px; display:block;">Entreprise</span>
                          <span style="color:#0f172a; font-size:15px; font-weight:600;">${escapeHtml(data.entreprise)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 20px; border-bottom:1px solid #e8f0ef;">
                          <span style="color:#64748b; font-size:12px; display:block;">Représentant</span>
                          <span style="color:#0f172a; font-size:15px; font-weight:600;">${escapeHtml(data.prenom)} ${escapeHtml(data.nom)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 20px; background-color:#f8fbfb; border-bottom:1px solid #e8f0ef;">
                          <span style="color:#64748b; font-size:12px; display:block;">Email professionnel</span>
                          <a href="mailto:${escapeHtml(data.email)}" style="color:#0f6e6e; font-size:15px; font-weight:600; text-decoration:none;">${escapeHtml(data.email)}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 20px;">
                          <span style="color:#64748b; font-size:12px; display:block;">Téléphone</span>
                          <a href="tel:${data.telephone.replace(/\s/g, '')}" style="color:#0f6e6e; font-size:15px; font-weight:600; text-decoration:none;">${escapeHtml(data.telephone)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Description -->
                <tr>
                  <td style="padding:24px 36px 0;">
                    <p style="margin:0 0 12px; color:#c07a64; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.2px;">
                      Besoin exprimé par le prospect
                    </p>
                    <div style="background-color:#fefcfa; border:1px solid #f0e6e0; border-radius:12px; padding:16px 20px;">
                      <p style="margin:0; color:#1a1a1a; font-size:14px; line-height:22px; white-space:pre-wrap;">${escapeHtml(data.description)}</p>
                    </div>
                  </td>
                </tr>

                <!-- CTA button -->
                <tr>
                  <td style="padding:28px 36px 0; text-align:center;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                      <tr>
                        <td style="background-color:#0f6e6e; border-radius:10px;">
                          <a href="mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent(`Re: Votre demande de démo BALAFON – ${data.entreprise}`)}&body=${encodeURIComponent(`Bonjour ${data.prenom},\n\nMerci pour votre intérêt pour BALAFON.\n\n`)}" style="display:inline-block; color:#ffffff; font-size:14px; font-weight:600; text-decoration:none; padding:12px 32px;">
                            Répondre à ${escapeHtml(data.prenom)} ${escapeHtml(data.nom)}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Metadata -->
                <tr>
                  <td style="padding:28px 36px 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e8f0ef; padding-top:16px;">
                      <tr>
                        <td style="color:#94a3b8; font-size:12px; line-height:18px;">
                          <strong style="color:#64748b;">Date de la demande :</strong> ${escapeHtml(data.date)}
                        </td>
                      </tr>
                      <tr>
                        <td style="color:#94a3b8; font-size:12px; line-height:18px; padding-top:4px;">
                          <strong style="color:#64748b;">Source :</strong> Formulaire ${SITE_URL}/demo
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer card -->
                <tr>
                  <td style="padding:24px 36px 28px; text-align:center;">
                    <p style="margin:0; color:#94a3b8; font-size:11px; line-height:18px;">
                      Cet email a été envoyé automatiquement depuis le site BALAFON.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer global -->
          <tr>
            <td style="padding:24px 0 0; text-align:center;">
              <p style="margin:0; color:#94a3b8; font-size:11px; line-height:18px;">
                <a href="${SITE_URL}" style="color:#0f6e6e; text-decoration:none; font-weight:600;">BALAFON</a> — Observabilité et gestion IT<br />
                Un produit <a href="https://www.africadigitalconnect.net" style="color:#0f6e6e; text-decoration:none; font-weight:600;">Africa Digital Connect</a><br />
                Cocody, II Plateaux, Rue J47 — Abidjan, Côte d'Ivoire
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
