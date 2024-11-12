/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "An Enhanced Hybrid Diagnostic Deep Learning Framework using Ensemble Vit-ResNets for Oral Carcinoma Detection",
    authors:
      "Ammad Hassan, Glen Shaji, F. Mohammed, Sai Konkimalla",
    conferences:
      "Seminar on Molecular Imaging Techniques, Mini-fellowship Program, Stanford Medicine(Best Research Award), International Young Researcher's Conference (IYRC) at Vagelos College of Physicians and Surgeons, Columbia University, Case Study Presentations at Harvard VISION Global Health & Leadership Conference, 5th Annual MehtA+ Machine Learning Conference In the process of publishing in the Columbia Junior Science Journal",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/paper.png",
    citation: {
      vancouver:
        "Ammad Hassan, Glen Shaji, F. Mohammed, Sai Konkimalla. An Enhanced Hybrid Diagnostic Deep Learning Framework using Ensemble Vit-ResNets for Oral Carcinoma Detection. Seminar on Molecular Imaging Techniques, Stanford Medicine. IYRC, Columbia. Harvard VISION Global Health Conference.",
    },
    abstract:
      "Oral cancer detection can be approached using two distinct methods: a fast ‘System-1’ approach that directly applies diagnostic models without extensive data processing, and a slower ‘System2’ approach that involves a detailed analysis. While System-2 approaches generally offer greater accuracy, they are often computationally expensive and may not be feasible with limited datasets or resources. Moreover, relying solely on either System-1 or System-2 methods overlooks the specific needs and constraints of different diagnostic scenarios. To address these challenges, we propose the Hybrid Meta-Diagnostic Framework, which balances between System-1 and System-2 methods to enhance oral carcinoma detection. This framework includes: (i) fine-tuning pre-trained Vision Transformer and Swin Transformer models on images, (ii) fine-tuning pre-trained ResNet-18 and MobileNETV2 models on images, (iii) using evaluation metrics to identify the best transformer and CNN architectures, and (iv) ensembling these models using the soft voting technique to combine predictions. The system dynamically combines these methods based on the complexity of the diagnostic task, optimizing performance and resource use. We fine-tuned and ensembled the models on a single dataset, requiring only standard pre-processing and fine-tuning techniques. Experimental results show that our Hybrid Diagnostic Framework outperforms traditional single-model approaches, demonstrating key advantages: (1) adaptability by balancing between fast and detailed analyses, (2) integration of diverse model architectures for improved diagnostic accuracy, and (3) robustness in handling small, resource-limited datasets.",
    absbox: "absPopup1",
 
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
