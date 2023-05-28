import Input from "./components/Input";
import Textarea from "./components/Textarea";
import "./styles/style.css";

function App() {
  return (
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 md:w-3/4 mx-auto py-6">
        <div class="flex flex-col gap-4 non-printable">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-sm"
          >
            <div className="collapse-title text-xl font-medium">General Information</div>
            <input type="checkbox" />
            <div className="collapse-content collapse-open grid grid-cols-2 gap-4">
              <Input label="Name" placeholder="John Doe" cvId="name" />
              <Input label="Email" placeholder="mail@example.com" cvId="mail" />
              <Input
                label="Phone number"
                type="tel"
                placeholder="0123456789"
                cvId="phone"
              />
              <Input label="Website" placeholder="linkedin / github" cvId="website" />
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-sm"
          >
            <div className="collapse-title text-xl font-medium">Education</div>
            <input type="checkbox" />
            <div className="collapse-content collapse-open grid grid-cols-2 gap-4">
              <Input label="School name" placeholder="Harvard" />
              <Input label="Title of study" placeholder="Computer Science" />
              <Input label="From" type="date" />
              <Input label="Until" type="date" />
              <div className="col-span-2 flex justify-end">
                <button class="btn btn-outline btn-primary">Add More</button>
              </div>{" "}
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-sm"
          >
            <div className="collapse-title text-xl font-medium">Work Experience</div>
            <input type="checkbox" />
            <div className="collapse-content collapse-open grid grid-cols-2 gap-4">
              <Input label="Company name" placeholder="Google" />
              <Input label="Position title" placeholder="Software Engineer" />
              <Input label="From" type="date" />
              <Input label="Until" type="date" />
              <Textarea label="Main tasks" placeholder="Developing software" />
              <div className="col-span-2 flex justify-end">
                <button class="btn btn-outline btn-primary">Add More</button>
              </div>{" "}
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-sm"
          >
            <div className="collapse-title text-xl font-medium">Skills</div>
            <input type="checkbox" />
            <div className="collapse-content collapse-open grid grid-cols-2 gap-4">
              <Input placeholder="HTML/CSS" />
              <Input placeholder="JavaScript" />
              <div className="col-span-2 flex justify-end">
                <button class="btn btn-outline btn-primary">Add More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 w-full gap-6 min-h-content max-h-content printable">
          <section id="generalInfo">
            <h1 id="name" className="flex justify-center w-full text-5xl pb-6">
              John Doe
            </h1>
            <div class="flex gap-3 justify-center">
              <p id="mail">mail@mail.com</p>
              <p id="phone">0123456789</p>
              <p id="website">linkedin / github</p>
            </div>
          </section>
          <section>
            <h2 className="text-3xl pb-3">Education</h2>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Harvard</p>
                <div className="flex gap-3">
                  <p>2010</p>
                  <p>2014</p>
                </div>
              </div>
              <div className="flex gap-3"></div>
              <p>Computer Science</p>
            </div>
          </section>
          <span className="border-b-2 border-black dark:border-white"></span>
          <section>
            <h2 className="text-3xl pb-3">Work Experience</h2>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold">Google</p>
                <div className="flex gap-3">
                  <p>2014</p>
                  <p>2018</p>
                </div>
              </div>
              <div className="flex gap-3"></div>
              <p>Software Engineer</p>
              <p>Developing software</p>
            </div>
          </section>
          <span className="border-b-2 border-black dark:border-white"></span>
          <section>
            <h2 className="text-3xl pb-3">Skills</h2>
            <div className="flex flex-col gap-3">
              <p>HTML/CSS</p>
              <p>JavaScript</p>
            </div>
          </section>
        </div>
        <div className="grid grid-cols-1 non-printable">
          <button
            className="btn dark:btn-outline btn-success"
            onClick={() => {
              // print cv div
              window.print();
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
